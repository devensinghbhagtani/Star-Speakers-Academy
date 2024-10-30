import React from "react";

function TermDetails() {
  return (
    <div className="flex w-full justify-center items-center overflow-hidden">
      <div className="w-[1080px] flex flex-col gap-7 p-10 text-md md:text-lg leading-7 text-zinc-600">
        <div className="mt-20">
          <div className="border-b-2 pb-2 mb-2">
            <h1 className="text-2xl font-semibold pl-0">
              Terms of Use for Star Speakers Academy
            </h1>
          </div>
          <div className="flex flex-col gap-10">
            <section>
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Star Speakers Academy, you agree to comply
                with these Terms of Use. If you disagree with any part of these
                Terms, you should not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">2. User Accounts</h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Account Creation:</span> You
                  must provide accurate, complete, and current information
                  during registration. You are responsible for maintaining your
                  account’s confidentiality.
                </li>
                <li>
                  <span className="font-semibold">Account Security:</span> You
                  are responsible for all activities that occur under your
                  account. If you notice unauthorized access or security
                  breaches, please notify us immediately.
                </li>
                <li>
                  <span className="font-semibold">Eligibility:</span> You must
                  be 18 years or older to use Star Speakers Academy. Users under
                  18 must only access content under the supervision of a parent
                  or guardian.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                3. Course Enrollment and Licenses
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Course Access:</span>{" "}
                  Purchasing a course grants you a limited, non-exclusive,
                  non-transferable license to view the content for personal,
                  non-commercial use.
                </li>
                <li>
                  <span className="font-semibold">Restrictions:</span> You are
                  prohibited from reproducing, sharing, reselling, or modifying
                  course content without express permission from Star Speakers
                  Academy or the instructor.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">4. Payments and Refunds</h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Pricing and Discounts:</span>{" "}
                  Course prices may vary due to promotions and can change
                  periodically. All prices include applicable taxes.
                </li>
                <li>
                  <span className="font-semibold">Refund Policy:</span> We offer
                  a 30-day refund policy on eligible purchases. Refund
                  eligibility may vary based on course completion status or
                  repeat refund requests. Refunds are typically processed to the
                  original payment method or issued as credits.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                5. Content Ownership and Intellectual Property
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Platform Content:</span> Star
                  Speakers Academy or its instructors own all rights to content
                  provided on the platform. Users are prohibited from copying,
                  distributing, or using any part of this content for commercial
                  purposes.
                </li>
                <li>
                  <span className="font-semibold">User Content:</span> By
                  submitting content, such as reviews or comments, you grant
                  Star Speakers Academy a non-exclusive, royalty-free license to
                  use, reproduce, and display this content on the platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                6. User Conduct and Prohibited Activities
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Prohibited Uses:</span> Users
                  agree not to engage in any unlawful, abusive, or disruptive
                  behavior. This includes spamming, infringing on intellectual
                  property, or attempting to reverse-engineer platform features.
                </li>
                <li>
                  <span className="font-semibold">Community Guidelines:</span>{" "}
                  Users should engage respectfully in forums and course
                  discussions. We reserve the right to remove content that
                  violates community standards.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                7. Modifications to Terms and Content
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Updating Terms:</span> Star
                  Speakers Academy may update these Terms periodically. Major
                  updates will be communicated, and continued use of the
                  platform constitutes acceptance of these changes.
                </li>
                <li>
                  <span className="font-semibold">Course Availability:</span> We
                  reserve the right to modify, replace, or discontinue courses
                  at our discretion.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">
                8. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Platform Use:</span> Star
                  Speakers Academy aims to provide high-quality content but
                  makes no guarantees about accuracy, completeness, or
                  suitability for a particular purpose.
                </li>
                <li>
                  <span className="font-semibold">Limited Liability:</span> Star
                  Speakers Academy shall not be liable for any indirect,
                  incidental, or consequential damages resulting from platform
                  use.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">9. Dispute Resolution</h2>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Governing Law:</span> These
                  Terms are governed by the laws of [Your Country’s Law].
                </li>
                <li>
                  <span className="font-semibold">Dispute Process:</span> In
                  case of disputes, we prefer resolution through informal
                  negotiation. If unresolved, disputes will proceed to
                  arbitration in accordance with applicable laws.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">10. Contact Us</h2>
              <p>
                For questions about these Terms of Use, contact us at [Your
                Contact Information].
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TermDetails;
