import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createRequestForDonateBlood: build.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        data: data,
      }),
      // invalidatesTags: [tagTypes.specialties],
    }),
    getMyBloodDonationRequests: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donation-request",
        method: "GET",
        params: arg,
      }),
      //   transformResponse: (response: IUser[], meta: IMeta) => {
      //     return {
      //       donors: response,
      //       meta: meta,
      //     };
      //   },
      providesTags: [tagTypes.request],
    }),

    getRequestsMadeByMe: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donation-request-by-me",
        method: "GET",
        params: arg,
      }),
      //   transformResponse: (response: IUser[], meta: IMeta) => {
      //     return {
      //       donors: response,
      //       meta: meta,
      //     };
      //   },
      // providesTags: [tagTypes.request],
    }),

    updateRequestStatus: build.mutation({
      query: (data) => {
        return {
          url: `/donation-request/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
        invalidatesTags: [tagTypes.request],
    }),
  }),
});

export const {
  useCreateRequestForDonateBloodMutation,
  useGetMyBloodDonationRequestsQuery,
  useGetRequestsMadeByMeQuery,
  useUpdateRequestStatusMutation,
} = requestApi;
