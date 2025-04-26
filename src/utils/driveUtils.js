export async function fetchXLSXFile(accessToken, fileName) {
    const query = `name='${fileName}' and mimeType='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'`;
  
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id, name)`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch file from Drive');
    }
  
    const data = await response.json();
    return data.files[0];  // Return first matching file
}

export async function downloadXLSXFile(fileId, accessToken) {
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to download file content from Drive');
    }
  
    const blob = await response.blob();
    return blob;
}
  
  