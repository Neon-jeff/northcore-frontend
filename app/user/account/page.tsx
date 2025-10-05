/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useVerifyKYCLevelOne } from "@/hooks/authentication";
import { useUserStore } from "@/store/user";
import { formatCurrency } from "@/utils/currency/format-currency";
import { IconAlertTriangle, IconStarFilled, IconStarsFilled } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import {
  House,
  IdCard,
  Star,
  UploadIcon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { toast } from "sonner";

const AccountsPage = () => {
  const { data } = useUserStore();
  return (
    <div className="bg-white  flex flex-col lg:min-h-5/6 max-md:min-h-screen lg:p-10 p-5 rounded-xl max-md:mb-10 lg:w-11/12">
      <h1 className="text-black max-md:text-center text-2xl font-bold">
        My Account
      </h1>
      <div className="flex flex-col max-md:items-center mt-10 lg:w-3/5 ">
        <img
          src={
            "https://ui-avatars.com/api/?name=" +
            data?.first_name +
            " " +
            data?.last_name
          }
          alt="avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        {data?.kyc_verified && (
          <div className="flex items-center gap-1 mt-2">
            <Star className="text-yellow-400 bg-yellow-100  rounded-full p-1" />
            <h2 className="text-black font-bold text-xs">Level 1 trader</h2>
          </div>
        )}
                {!data?.kyc_verified && (
          <div className="flex items-center gap-1 mt-2">
            <IconAlertTriangle className="text-orange-600 bg-orange-100  rounded-full p-1" />
            <h2 className="text-orange-600 font-bold text-xs">KYC Pending</h2>
          </div>
        )}
        <p className="text-2xl font-bold bg-gray-50 border border-gray-100   w-fit p-2 px-5 rounded-full text-black mt-2">
          {formatCurrency(data?.balance || 0)}
        </p>
        <div className="grid grid-cols-1 w-full gap-4 mt-5 lg:grid-cols-2">
          <NameBlock value={data?.first_name || ""} label="First Name" />
          <NameBlock value={data?.last_name || ""} label="Last Name" />
          <NameBlock value={data?.email || ""} label="Email" />
          <NameBlock value={data?.phone_number || ""} label="Phone Number" />
        </div>
       <Suspense fallback={null}>
         <KYCStatus />
       </Suspense>
      </div>
    </div>
  );
};

function NameBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-sm w-full pb-2 text-gray-500 font-semibold">{label}</p>
      <div className="border border-gray-100 p-5 rounded-2xl w-full">
        <p className="text-black font-bold text-sm">{value}</p>
      </div>
    </div>
  );
}

function KYCStatus() {
  const params = useSearchParams()
  const { data: user } = useUserStore();
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(!!params.get('open'));
  const handleVerificationSuccess = () => {
    queryClient.refetchQueries({ queryKey: ["notifications"] });
    setOpen(false);
  };
  return (
    <div className="flex flex-col mt-5 gap-1 p-5 border border-blue-50 w-full rounded-lg bg-blue-50/50">
      <h2 className="text-black flex items-center gap-1 font-bold text-base"><IconStarsFilled/> KYC Level</h2>
      {!user?.kyc_verified && (
        <p className="text-xs text-gray-600 pt-2">
          You&apos;re currently not verified.
        </p>
      )}
      {user?.kyc_verified && (
        <p className="text-green-600 mt-4 flex items-center gap-2 text-sm font-bold">
          <IconStarFilled className="inline text-green-500" /> Level 1 verified
        </p>
      )}
      {!user?.kyc_verified && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="bg-primary text-white px-4 py-2 mt-5 rounded-lg w-fit text-sm">
              Upgrade to level one
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-black pb-4 font-jakarta">
              Kyc Level One Verification
            </DialogTitle>
            {!user?.kyc_verified && (
              <KYCLevelOneForm onSuccess={handleVerificationSuccess} />
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

function KYCLevelOneForm({ onSuccess }: { onSuccess?: () => void }) {
  const {setUser} = useUserStore()
  const [idFile, setIdFile] = React.useState<File | null>(null);
  const [addressFile, setAddressFile] = React.useState<File | null>(null);
  const verifyKYCLevelOne = useVerifyKYCLevelOne();

  function handleUploadAddressFile(event: React.ChangeEvent<HTMLInputElement>) {
    setAddressFile(event.target.files ? event.target.files[0] : null);
  }
  function handleUploadIdFile(event: React.ChangeEvent<HTMLInputElement>) {
    setIdFile(event.target.files ? event.target.files[0] : null);
  }
  function handleSubmit() {
    // Check if both files are uploaded
    if (!idFile || !addressFile) {
      toast.error("Please upload all required documents");
      return;
    }
    const formData = new FormData();
    formData.append("files", idFile);
    formData.append("files", addressFile);
    verifyKYCLevelOne.mutate(formData, {
      onSuccess: (data) => {
        toast.success("KYC Level One verification successful");
        // Reset the form or perform any other actions
        setIdFile(null);
        setAddressFile(null);
        setUser(data);
        if (onSuccess) onSuccess();
      },
      onError: () => {
        toast.error("KYC Level One verification failed");
      },
    });
  }
  return (
    <div className="space-y-8">
      <div>
        <Label htmlFor="profileDoc" className="text-sm font-bold block">
          <p className="flex items-center gap-2 text-black text-base">
            <IdCard />
            Valid Identification
          </p>

          <div className="flex gap-2 mt-2">
            {["Passport", "Driver's License", "National ID Card"].map(
              (item) => (
                <p
                  key={item}
                  className="text-xs max-sm:text-[.6rem] bg-gray-50 p-2 rounded-full text-gray-500 font-semibold"
                >
                  {item}
                </p>
              )
            )}
          </div>
          <div className="bg-gray-50 space-y-1 border border-dashed border-gray-300 h-32 rounded-lg mt-2 flex flex-col justify-center items-center cursor-pointer">
            <UploadIcon />
            <p className="text-xs font-semibold text-gray-600">
              Click to upload
            </p>
            <p className="text-xs  text-gray-500">(PNG, JPG, PDF up to 2MB)</p>
            <p>
              {idFile && (
                <span className="text-xs text-blue-600">{idFile.name}</span>
              )}
            </p>
          </div>
        </Label>
        <Input
          id="profileDoc"
          type="file"
          className="mt-2 hidden"
          onChange={handleUploadIdFile}
        />
      </div>
      <div>
        <Label htmlFor="addressDoc" className="text-sm font-bold block">
          <p className="flex items-center gap-2 text-black text-base max-md:text-sm">
            <House className="max-sm:text-xs" />
            Proof of Address
          </p>

          <div className="flex gap-2 mt-2">
            {["Utility Bill", "Bank Statement", "Lease Agreement"].map(
              (item) => (
                <p
                  key={item}
                  className="text-xs max-sm:text-[.6rem] bg-gray-50 p-2 rounded-full text-gray-500 font-semibold"
                >
                  {item}
                </p>
              )
            )}
          </div>
          <div className="bg-gray-50 space-y-1 border border-dashed border-gray-300 h-32 rounded-lg mt-2 flex flex-col justify-center items-center cursor-pointer">
            <UploadIcon />
            <p className="text-xs font-semibold text-gray-600">
              Click to upload
            </p>
            <p className="text-xs  text-gray-500">(PNG, JPG, PDF up to 2MB)</p>
            <p>
              {addressFile && (
                <span className="text-xs text-blue-600">
                  {addressFile.name}
                </span>
              )}
            </p>
          </div>
        </Label>
        <Input
          id="addressDoc"
          type="file"
          className="mt-2 hidden"
          onChange={handleUploadAddressFile}
        />
      </div>
      <Button
        className="w-full"
        onClick={handleSubmit}
        loading={verifyKYCLevelOne.isPending}
        disabled={verifyKYCLevelOne.isPending}
      >
        Submit for Verification
      </Button>
    </div>
  );
}

export default AccountsPage;
