"use client";

import {
  Button,
  Flex,
  Heading,
  Text,
  Background,
  Arrow,
} from "@/once-ui/components";
import { mailchimp } from "@/app/resources";

// Debounce utility function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

export const SpeakerCard = () => {
  return (
    <Flex
      style={{ overflow: "hidden" }}
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      direction="column"
      alignItems="center"
      align="center"
      background="surface"
      border="neutral-medium"
      borderStyle="solid-1"
    >
      <Background
        position="absolute"
        mask={mailchimp.effects.mask as any}
        gradient={mailchimp.effects.gradient as any}
        dots={mailchimp.effects.dots as any}
        lines={mailchimp.effects.lines as any}
      />
      <Heading
        style={{ position: "relative" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        Bring Tech & Innovation to Your Team
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        I speak on topics such as building innovative cultures, safely growing
        with AI, balancing governance with experimentation, and practical steps
        for digital transformation. Perfect for leadership offsites,
        conferences, and team kickoffs.
      </Text>
      <Button
        id="testimonials"
        data-border="rounded"
        href={`https://calendly.com/aashnisshah/web`}
        variant="primary"
        size="l"
      >
        <Flex gap="8" alignItems="center">
          Book a Speaking Engagement
          <Arrow trigger="#contact" />
        </Flex>
      </Button>
    </Flex>
  );
};
