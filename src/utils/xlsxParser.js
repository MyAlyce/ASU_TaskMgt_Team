import * as XLSX from 'xlsx';

export async function parseHeartRateFromBlob(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json(sheet);
  const heartRates = jsonData.map(row => row["Last Heart Rate"]).filter(Boolean);

  return heartRates;
}