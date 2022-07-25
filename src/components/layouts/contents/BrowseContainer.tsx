import { MdOutlineFolder, MdStarOutline } from 'react-icons/md'
import { IFileInfo } from '@/interfaces/file'
import { BrowseList } from './BrowseList'

interface BrowseContainerProps {
    favorites?: IFileInfo[]
    directories?: IFileInfo[]
    handleAddDirectory?: (event: React.MouseEvent<HTMLInputElement>) => void
}

export const BrowseContainer: React.FC<BrowseContainerProps> = ({
    favorites,
    directories,
    handleAddDirectory,
    ...props
}: BrowseContainerProps) => (
    <section className="min-w-[200px] [&>div]:py-4" {...props}>
        <BrowseList title="Favorites" icon={<MdStarOutline />} browseList={favorites} />

        <BrowseList
            title="Local"
            icon={<MdOutlineFolder />}
            browseList={directories}
            handleAddClick={handleAddDirectory}
        />
    </section>
)

BrowseContainer.defaultProps = {
    favorites: [],
    directories: [],
    handleAddDirectory: (event) => {
        event.preventDefault()
    },
}
