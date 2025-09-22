import { mailchimp } from "@/app/resources";
import {
  Background,
  Button,
  Flex,
  Heading,
  Icon,
  Text,
} from "@/once-ui/components";

interface Offerings {
  title: string;
  description: string;
  iconName: string;
  ctaMessage: string;
}

interface PostProps {
  offeringsList: Offerings[];
}

export default function Offerings({ offeringsList }: PostProps) {
  return (
    <Flex>
      <Background
        position="absolute"
        mask={mailchimp.effects.mask as any}
        gradient={mailchimp.effects.gradient as any}
        dots={mailchimp.effects.dots as any}
        lines={mailchimp.effects.lines as any}
      />
      <Flex
        fillWidth
        direction="column"
        alignItems="center"
        paddingY="l"
        gap="xl"
      >
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
          My Services
        </Heading>
        <Flex
          direction="row"
          gap="l"
          wrap={true}
          justifyContent="center"
          fillWidth
        >
          {offeringsList.map((offer: any, index: number) => (
            <Flex
              direction="column"
              alignItems="center"
              padding="l"
              style={{
                textAlign: "center",
                borderRadius: "16px",
                border: "1px solid white",
              }}
              gap="m"
            >
              <Icon
                onBackground="accent-weak"
                name={offer.iconName}
                size="xl"
              />
              <Heading as="h1" variant="heading-default-l">
                {offer.title}
              </Heading>
              <Text variant="body-default-l">{offer.subtitle}</Text>
              <Text variant="body-default-m">{offer.description}</Text>
              <Heading as="h3" variant="heading-default-m">
                Typical Outcomes:
              </Heading>
              <ul>
                {offer.outcomesList.map((outcome: string, index: number) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </Flex>
          ))}
        </Flex>
        <Button
          variant="primary"
          href={`https://calendly.com/aashnisshah/web`}
          size="m"
        >
          Book a strategy call
        </Button>
      </Flex>
    </Flex>
  );
}
