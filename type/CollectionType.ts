export interface Folder {
  key: string;
  title: string;
  by: string;
}

export interface Note {
  title: boolean;
  content: string;
  by: string;
  createdAt: number;
  updatedAt: number;
}
