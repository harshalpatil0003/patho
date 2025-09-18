import { Panel } from '../components/Dashboard/Dashboard.jsx'
import { Profile } from '../components/Profile/Profile.jsx'
import { Card, Button } from 'flowbite-react'
import blood from '../Assets/User Panel/blood.AVIF'
import checkup from '../Assets/User Panel/checkup.jpg'
import Specialized_Tests from '../Assets/User Panel/Specialized_Tests.webp'
export default function User_Panel({name}) {
    return (
        <div>
            <Profile name={ name} />


            <Panel/>

            <div className='flex flex-wrap  justify-evenly'>
                <Card
                    className="max-w-sm m-6">
                    <img src={blood} alt="image 1" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Blood Tests
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Blood tests provide key insights into your health, detecting conditions like anemia, infections, and more. Ideal for routine check-ups or specific concerns, ensuring accurate and reliable results.
                    </p>
                  
                    <Button className=''>More</Button>
                </Card>
                <Card
                    className="max-w-sm m-6">
                    <img src={checkup} alt="image 1" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Health Check Up
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Health packages offer comprehensive check-ups, combining multiple tests to assess overall wellness and detect potential health issues early.                </p>
                    <Button>More</Button>
                </Card>
                <Card
                    className="max-w-sm m-6">
                    <img src={Specialized_Tests} alt="image 1" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Specialized Tests
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                    Specialized tests provide advanced diagnostics for specific conditions, offering precise and detailed health insights.
                    </p>
                    <Button>More</Button>
                </Card>
            </div>



        </div>

    );
}