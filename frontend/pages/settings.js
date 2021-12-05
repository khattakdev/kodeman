import UserName from '../components/ApiHeader/inner-components/UserName';
import DarkMode from '../components/ApiHeader/inner-components/DarkMode';
import ConnectGithub from '../components/ApiHeader/inner-components/ConnectGithub';
import ButtonColor from '../components/ApiHeader/inner-components/ButtonColor';

const Settings = () => {
    return(
        <div className="flex bg-gray-900 max-h-screen w-full h-screen justify-center">
            <div>
            <UserName/>
            <ButtonColor/>
            <DarkMode/>
            <ConnectGithub/>
            </div>
        </div>
    );
};

export default Settings;