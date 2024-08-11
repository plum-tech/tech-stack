import Select from 'react-select'
import { useState } from "react"

const options = [
  { value: 'LAN', label: 'LAN' },
  { value: 'WAN', label: 'WAN' },

];

export function TencentCloudSourceSelector() {
  const [selectedOption, setSelectedOption] = useState("LAN");
  return <Select
    defaultValue={selectedOption}
    onChange={setSelectedOption}
    options={options}
  />
}

export function TencentCloudSourceWithSelector({ builder }) {
  return <>
    <TencentCloudSourceSelector />
    {builder()}
  </>
}

export function buildTencentCloudSource({
  net, version, withSource
}: {
  net?: "LAN" | "WAN"
  version?: "jammy" | "focal"
  withSource?: boolean
}) {
  const base = net == "LAN"
    ? "http://mirrors.tencentyun.com" // LAN
    : "http://mirrors.tencent.com" // WAN

  version = version ?? "jammy"
  withSource = withSource ?? false

  return (
    `# See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to
# newer versions of the distribution.
deb ${base}/ubuntu ${version} main restricted
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version} main restricted`}
## Major bug fix updates produced after the final release of the
## distribution.
deb ${base}/ubuntu ${version}-updates main restricted
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-updates main restricted`}
## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team. Also, please note that software in universe WILL NOT receive any
## review or updates from the Ubuntu security team.
deb ${base}/ubuntu ${version} universe
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version} universe`}
deb ${base}/ubuntu ${version}-updates universe
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-updates universe`}
## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team, and may not be under a free licence. Please satisfy yourself as to
## your rights to use the software. Also, please note that software in
## multiverse WILL NOT receive any review or updates from the Ubuntu
## security team.
deb ${base}/ubuntu ${version} multiverse
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version} multiverse`}
deb ${base}/ubuntu ${version}-updates multiverse
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-updates multiverse`}
## N.B. software from this repository may not have been tested as
## extensively as that contained in the main release, although it includes
## newer versions of some applications which may provide useful features.
## Also, please note that software in backports WILL NOT receive any review
## or updates from the Ubuntu security team.
deb ${base}/ubuntu ${version}-backports main restricted universe multiverse
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-backports main restricted universe multiverse`}
deb ${base}/ubuntu ${version}-security main restricted
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-security main restricted`}
deb ${base}/ubuntu ${version}-security universe
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-security universe`}
deb ${base}/ubuntu ${version}-security multiverse
${!withSource ? "" : `# deb-src ${base}/ubuntu ${version}-security multiverse`}
`)
}