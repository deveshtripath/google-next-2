import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/solid"
import HeaderOption from "./HeaderOption"

function HeaderOptions() {
    return (
        <div className="flex w-full text-green-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            <div className="flex space-x-6 ">
                    <HeaderOption Icon={SearchIcon} title="All" selected />
                    <HeaderOption Icon={PhotographIcon} title="Image"  />
                    <HeaderOption Icon={PlayIcon} title="videos"  />
                    <HeaderOption Icon={NewspaperIcon} title="News"  />
                    <HeaderOption Icon={MapIcon} title="Maps"  />
                    <HeaderOption Icon={DotsVerticalIcon} title="More"  />
            </div>

        <div className="flex space-x-4">
            <p className="link hover:underline">Setting</p>
            <p className="link hover:underline">Tool</p>
        </div>
        </div>
    )
}

export default HeaderOptions
