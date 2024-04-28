import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_REVIEW_MANAGEMENT_BASE_URL;

export type ConferenceResponse = {
    id: number;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    location: string;
    speakers: string;
    website: string;
    overall_rating: number | null;
};

export const fetchAllConferences = async (
): Promise<ConferenceResponse[]> => {
    try {
        console.log('API', BASE_URL)
        const response: AxiosResponse<ConferenceResponse[]> = await axios.get(
            `${BASE_URL}/conferences`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching conferences:", error);
        throw error;
    }
};

export const fetchConferenceById = async (
    conferenceId: string
): Promise<ConferenceResponse> => {
    try {
        const response: AxiosResponse<ConferenceResponse> = await axios.get(
            `${BASE_URL}/conferences/${conferenceId}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching conferences:", error);
        throw error;
    }
};

export const fetchReviewsByConferenceId = async (
    conferenceId: string
): Promise<ConferenceResponse> => {
    try {
        const response: AxiosResponse<ConferenceResponse> = await axios.get(
            `${BASE_URL}/conferences/${conferenceId}/reviews`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching conferences:", error);
        throw error;
    }
}