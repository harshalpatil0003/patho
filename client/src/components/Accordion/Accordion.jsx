
"use client";

import { Accordion } from "flowbite-react";

export function Straps() {
    return (
        <Accordion collapseAll className="mb-25">
            <Accordion.Panel>
                <Accordion.Title>Convenience</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Book tests online anytime, anywhere, without the need for lengthy phone calls or visits.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Comprehensive Listings</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Access a wide range of pathology tests from trusted labs.
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title>Transparency</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        View detailed pricing and lab information upfront.
                    </p>

                   
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}
