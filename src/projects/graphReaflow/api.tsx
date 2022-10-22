export async function getDataGraph() {
    let gotData: any 
    gotData = await fetch("/api/config/inspector/?transform=false")
        .then((res) => res.json())
        .catch(console.log)
        // .finally(() => setLoading(false))
    return gotData
}