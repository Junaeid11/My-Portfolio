

export type IImageFiles = Record<string, Express.Multer.File[]>;

export interface IImageFile {
    single: string
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    path: string;
    size: number;
    filename: string;
}
