---
description: "Track virtual machines, containers and clusters in Zom's HaRM: what runs where, and how much of each host it uses."
---

# Virtual machines and clusters

A virtual machine or container is a device that **runs on** a host. It has everything a device has (addresses, services, logins, notes) plus its VM ID, vCPUs, memory and disk, and it doesn't take rack space.

## Adding a VM or container

- From a host's **VMs** tab: **Add VM** or **Container**.
- From **Virtual & Clusters**: **+ VM**, then pick the host under **Runs on (host)**.
- From Proxmox in one go: [Discover > Proxmox](./discover#proxmox).

On the form, choose type **Virtual Machine** or **Container**; the VM fields appear and the rack fields disappear.

## A host's VMs tab

![A host's VMs tab](/img/harm/device-vms.png)

It lists the host's guests with their size, address and status, and how much of the host they claim: vCPUs against the host's CPU threads, and memory against its installed memory. Over 100% means the host is overcommitted, which is common for CPU and risky for memory. Add the host's CPUs and memory on its **Hardware** tab so HaRM can compare.

## Virtual & Clusters

![Virtual & Clusters](/img/harm/virtual.png)

One page with your clusters, your hosts (with guest counts and resources claimed), and every VM and container, filterable.

## Clusters

A cluster groups hosts: Proxmox VE, Kubernetes, VMware vSphere, Hyper-V, XCP-ng, Docker Swarm, Nomad, Ceph, TrueNAS or other.

![A cluster page](/img/harm/cluster.png)

A cluster's page shows its nodes, every guest on them, combined cores, memory and storage, how much the guests claim, and its own notes. **+ Add node** adds an existing device or a new one. You can also set a host's cluster on its form under **More details**.

Deleting a cluster keeps its hosts and VMs; they just leave the cluster. Deleting a host keeps its VMs, without a host.

## Related

- [Discover](./discover#proxmox): importing a Proxmox cluster
- [Devices](./devices): VMs are devices too
- [A Proxmox home lab](./scenarios/proxmox-lab): the whole setup, step by step
