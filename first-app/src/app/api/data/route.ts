import fetchTrainData from '../train';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  var crs = searchParams.get('crs')
    console.log(searchParams)
  console.log('intiall route crs: ' + crs)
  crs = crs ? crs : "WOK"
  // Get the data from the fetchTrainData function
  const data = await fetchTrainData(crs);
  // Send the data as a JSON response
  return Response.json({ data });
}