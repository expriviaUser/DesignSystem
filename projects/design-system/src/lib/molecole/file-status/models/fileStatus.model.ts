import { File } from "../../file/models/file.model";

export interface FileStatus extends File {
    status: string,
    downloadDisabled?: boolean,
    showDownload?: boolean
}
