import { getPosts } from '@/app/utils/utils';
import { Flex } from '@/once-ui/components';

import { ProjectCard } from '@/components';
import { ServiceCard } from '../ServiceCard';

interface Services {
    title: string;
    description: string;
    slug: string;
}

interface ServicesProps {
    servicesList: Services[];
}

export function ServicesList({ servicesList }: ServicesProps) {

    return (
        <Flex
            fillWidth gap="l" marginBottom="24" paddingX="l"
            direction="column">
            {servicesList.map((post) => (
                <ServiceCard
                    key={post.title}
                    title={post.title}
                    // subtitle={post.subtitle}
                    description={post.description}
                    slug={post.slug}
                // outcomes={post.outcomes}
                />
            ))}
        </Flex>
    );
}