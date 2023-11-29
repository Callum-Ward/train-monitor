import fetchTrainData from '../train';

export async function GET() {
  // Get the data from the fetchTrainData function
  const data = await fetchTrainData('WOK');
  // Send the data as a JSON response
  return Response.json({ data });
}