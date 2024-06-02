import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "/my-profile",
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateMyProfileMutation } = authApi;
