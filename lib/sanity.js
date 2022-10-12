import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: "9s8ap4vs",
  dataset: "production",
  token:
    "skX4Z2l9sT7K0ySN0S5ifxyciXZBSprLsnK7SAdahGZFgrNxPTUlsFMgj7FP2ZUjnTulmgT0QLZauQ5gI7kHxGdPlK2T2vv9yAWQbs4q98MupPtYNLnA20l3LTcdG3YpnWhepCluclnh2sKotV5MPlVJgqQliSeu9w3nFKkyCfOAZydyBmwZ",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
})

export default client
