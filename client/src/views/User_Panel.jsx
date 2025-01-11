import { Panel } from '../components/Side Panel/panel.jsx'
import { Profile } from '../components/Profile/Profile.jsx'
import { Card, Button } from 'flowbite-react'
import blood from '../Assets/User Panel/blood.AVIF'
export default function User_Panel() {
    return (
        <div>
            <Profile name={name} />


            <Panel />

            <div className='flex flex-wrap  justify-evenly mt-20 '>
                <Card
                    className="max-w-sm m-6">
                    <img src={blood} alt="image 1" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Blood Tests
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <Button>More</Button>
                </Card>
                <Card
                    className="max-w-sm m-6">
                    <img src={blood} alt="image 1" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Blood Tests
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <Button>More</Button>
                </Card>
                <Card
                    className="max-w-sm m-6">
                    <img src={blood} alt="image 1" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Blood Tests
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <Button>More</Button>
                </Card>
            </div>



        </div>

    );
}