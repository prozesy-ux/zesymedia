import { FormField } from "@/integrations/projects/sections/ContactSection/components/FormField";
import { SubmitButton } from "@/integrations/projects/sections/ContactSection/components/SubmitButton";

export const ContactForm = () => {
  return (
    <form
      name="wf-form-Contact-Form"
      aria-label="Contact Form"
      className="box-border caret-transparent"
    >
      <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6 md:gap-x-9 md:grid-rows-[auto_auto] md:gap-y-9">
        <FormField
          label="Full Name"
          fieldType="text"
          name="Full-Name"
          placeholder="John Doe"
        />
        <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-4 md:grid-cols-[1fr_1fr] md:gap-y-4">
          <FormField
            label="Your Email"
            fieldType="email-double"
            name="Email"
            placeholder="yourmail@gmail.com"
            secondaryName="work-email"
            secondaryPlaceholder="Your email here"
          />
          <FormField
            label="Whatsapp Number "
            fieldType="tel"
            name="WhatsApp-Number"
            placeholder="1 123 1234567"
          />
        </div>
        <FormField
          label="Project Budget"
          fieldType="radio"
          name="Project-Budget"
          radioOptions={[
            { value: "Less than $5K", label: "Less than $5K" },
            { value: "$5K - $10K", label: "$5K - $10K" },
            { value: "$10K - $20K", label: "$10K - $20K" },
            { value: "$20K - $50K", label: "$20K - $50K" },
            { value: "More than $50K", label: "More than $50K" },
          ]}
        />
        <FormField
          label="Project Details"
          fieldType="textarea"
          name="Project-details"
          placeholder="I want to redesign my website.."
        />
        <SubmitButton />
      </div>
    </form>
  );
};
