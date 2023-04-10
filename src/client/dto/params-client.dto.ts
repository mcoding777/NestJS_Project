export type CreateClientParams = {
  company: string;
  manager: string;
  phone?: string;
};

export type UpdateClientParams = {
  company?: string;
  manager?: string;
  phone?: string;
};

export type GetClientParams = {
  page?: number;
  limit?: number;
};
