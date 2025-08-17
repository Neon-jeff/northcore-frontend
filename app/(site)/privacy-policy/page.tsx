
"use client";
import Section from "@/components/layout/sections";
import React from "react";
import Footer from "@/components/ui/footer";

const PrivacyPolicyPage = () => {
	return (
		<main className="bg-white">
			<Section className="lg:pt-20 max-md:w-11/12 mt-20 flex max-md:justify-center text-white home-banner min-h-[70vh] rounded-2xl lg:p-10 max-md:flex-col">
				<div className="space-y-2 gap-4 flex lg:w-1/2 flex-col justify-center">
					<div className="flex text-[.65rem] px-5 text-blue-100 items-center gap-2 p-2 bg-gray-800 w-fit rounded-full border border-blue-900">
						<div className="bg-blue-500 border-blue-200 size-3 rounded-full animate-pulse border-2 " />
						<span>Northcore Markets Privacy</span>
					</div>
					<Section.Title className="text-white block lg:w-full ">
						Privacy Policy
					</Section.Title>
					<Section.Description className="text-white lg:w-4/5">
						Your privacy is important to us. This Privacy Policy explains how Northcore Markets collects, uses, and protects your information when you use our platform.
					</Section.Description>
				</div>
			</Section>
			<Section className="mt-10  py-10 bg-white rounded-2xl  p-8">
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">1. Information We Collect</h2>
					<p className="text-gray-600 leading-relaxed">
						We collect information you provide directly to us, such as when you create an account, update your profile, or contact support. This may include your name, email address, phone number, and other relevant details.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">2. How We Use Your Information</h2>
					<p className="text-gray-600 leading-relaxed">
						We use your information to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform. We may also use your information to send you updates and marketing communications, which you can opt out of at any time.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">3. Data Sharing and Disclosure</h2>
					<p className="text-gray-600 leading-relaxed">
						We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our platform, as required by law, or to protect our rights and users.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">4. Cookies and Tracking Technologies</h2>
					<p className="text-gray-600 leading-relaxed">
						We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can manage your cookie preferences in your browser settings.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">5. Data Security</h2>
					<p className="text-gray-600 leading-relaxed">
						We implement industry-standard security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">6. Your Rights and Choices</h2>
					<p className="text-gray-600 leading-relaxed">
						You have the right to access, update, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at the email below.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">7. Changes to This Policy</h2>
					<p className="text-gray-600 leading-relaxed">
						We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our platform. Your continued use of Northcore Markets constitutes acceptance of the updated policy.
					</p>
				</section>
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-2">8. Contact Us</h2>
					<p className="text-gray-600 leading-relaxed">
						If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@northcoremarkets.com" className="text-blue-600 underline">support@northcoremarkets.com</a>.
					</p>
				</section>
				<footer className="text-center text-gray-400 text-xs mt-10">
					&copy; {new Date().getFullYear()} Northcore Markets. All rights reserved.
				</footer>
			</Section>
			<Footer />
		</main>
	);
};

export default PrivacyPolicyPage;
