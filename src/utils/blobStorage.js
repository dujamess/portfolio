// Utility for handling video files with Vercel Blob
import { put } from '@vercel/blob';

export const uploadVideoToBlob = async (file) => {
  try {
    const blob = await put(file.name, file, {
      access: 'public',
      contentType: 'video/mp4',
    });
    return blob.url;
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error;
  }
};

// For static videos, you can also use direct blob URLs
export const getVideoUrl = (filename) => {
  // If using blob storage, return the blob URL
  // Otherwise, return the local path
  return `/pink.mp4`; // Update this path as needed
};
