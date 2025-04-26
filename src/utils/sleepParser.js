import * as XLSX from 'xlsx';

export async function parseSleepDataFromBlob(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const sheetName = workbook.SheetNames[0]; // assume first sheet
  const sheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json(sheet); // convert to array of objects

  if (jsonData.length === 0) {
    throw new Error('Sheet is empty!');
  }

  const firstEntry = jsonData[0];

  const sleepData = {
    wakeMinutes: firstEntry['Sleep Wake Stage'] || 0,
    remMinutes: firstEntry['Sleep REM Stage'] || 0,
    lightMinutes: firstEntry['Sleep Light Stage'] || 0,
    deepMinutes: firstEntry['Sleep Deep Stage'] || 0,
  };

  return sleepData;
}