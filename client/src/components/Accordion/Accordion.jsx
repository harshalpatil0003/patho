
"use client";

import { Accordion } from "flowbite-react";

export function Straps() {
    return (
        <Accordion collapseAll className="mb-25">
            <Accordion.Panel>
                <Accordion.Title className="h-2 text-cyan-800">Convenience</Accordion.Title>
                <Accordion.Content className="bg-gradient-to-r from-cyan-500">
                    <p className="mb-2 text-white dark:text-gray-400">
                        Book tests online anytime, anywhere, without the need for lengthy phone calls or visits.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="h-2 text-cyan-800">Comprehensive Listings</Accordion.Title>
                <Accordion.Content className="bg-gradient-to-r from-cyan-500">
                    <p className="mb-2 text-white dark:text-gray-400">
                        Access a wide range of pathology tests from trusted labs.
                    </p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="h-2 text-cyan-800">Transparency</Accordion.Title>
                <Accordion.Content className="bg-gradient-to-r from-cyan-500">
                    <p className="mb-2 text-white dark:text-gray-400">
                        View detailed pricing and lab information upfront.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="h-2 text-cyan-800">Secure and Reliable</Accordion.Title>
                <Accordion.Content className="bg-gradient-to-r from-cyan-500">
                    <p className="mb-2 text-white dark:text-gray-400">
                        Your personal and health data is handled with the utmost care and confidentiality.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className="h-2 text-cyan-800">Time-Saving</Accordion.Title>
                <Accordion.Content className="bg-gradient-to-r from-cyan-500 ">
                    <p className="mb-2 text-white dark:text-gray-400">
                        Schedule appointments that fit your busy lifestyle.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>

        </Accordion>
    );
}
