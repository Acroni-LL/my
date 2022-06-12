import requestT from "@/utils/requestT";

export function getNode(url, domainName = "") {
  return requestT({
    url: url,
    requestBaseUrl: domainName,
  });
}
