import { File } from "../../file/models/file.model";

export interface FileUpload extends File {
    progress: number;
}