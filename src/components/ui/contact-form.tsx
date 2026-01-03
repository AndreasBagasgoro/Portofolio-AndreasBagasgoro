'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './text-area';
import { RiMailSendLine } from 'react-icons/ri';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [state, handleSubmit] = useForm('xojvajrz');

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-center space-y-4">
        <div className="text-6xl text-primary">✓</div>
        <h3 className="text-2xl font-bold text-primary">Thank you!</h3>
        <p className="text-muted-foreground">
          Your message has been sent successfully. I&apos;ll get back to you
          soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          required
          className="bg-background/50 border-border/50 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          className="bg-background/50 border-border/50 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          className="bg-background/50 border-border/50 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or just say hello..."
          required
          rows={6}
          className="bg-background/50 border-border/50 focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full shadow-elegant hover:scale-105 transition-transform duration-200"
        size="lg"
      >
        {state.submitting ? (
          'Sending...'
        ) : (
          <>
            Send Message <RiMailSendLine />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
