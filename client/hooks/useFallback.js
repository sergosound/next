import { useRouter } from 'next/router';

export default function useFallback() {
    return useRouter().isFallback;
};