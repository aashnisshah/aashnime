import { mailchimp } from "@/app/resources";
import { Background, Button, Flex, Heading, Icon, Text } from "@/once-ui/components";

interface Offerings {
    title: string,
    description: string,
    iconName: string,
    ctaMessage: string,
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
                border="neutral-medium"
                borderStyle="solid-1"
            >
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                    Work With Me
                </Heading>
                <Flex
                    direction="row"
                    gap="l"
                    wrap={true}
                    justifyContent="center"
                    fillWidth
                >
                    {/* Service 1 */}
                    {offeringsList.map((offer: any, index: number) => (
                        <Flex
                            direction="column"
                            alignItems="center"
                            padding="l"
                            style={{
                                textAlign: "center",
                                borderRadius: "16px",
                                maxWidth: "300px",
                            }}
                            gap="m"
                        >
                            <Icon
                                onBackground="accent-weak"
                                name={offer.iconName}
                                size="xl" />
                            <Heading as="h3" variant="heading-default-m">
                                {offer.title}
                            </Heading>
                            <Text>
                                {offer.description}
                            </Text>
                            <Button
                                variant="primary"
                                href={`https://calendly.com/aashnisshah/web`}
                                size="m"
                            >
                                {offer.ctaMessage}
                            </Button>
                        </Flex>
                    ))}

                </Flex>
            </Flex>
        </Flex>
    )
}