export const DataApi = {
   GetInformation: async (): Promise<AxiosResponse<ApiResponse<ExampleType>>> => {
      try {
         const response = await Axios.get(`/`);
         return response;
      } catch (error) {
         throw error;
      }
   },
};

export type ExampleType = {
   firstname: string;
   lastname: string;
   age: number;
};
