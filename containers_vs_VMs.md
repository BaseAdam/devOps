Differences between Containers and VMs:

• The level at which virtualization happens: in VMs virtualization happens at hardware level - in containers virtualization happens at OS level. This means that in VM the hypervisor creates instances of each hardware component like: processor, RAM etc.
Containers virtualize the operating system.

• With VMs we achieve isolation of machines – with Containers we achieve isolation of processes.
This means that we can have many instances of different machines that are independent or we can have many containers that share the same OS and contains only the application and its libraries and dependencies. Containers can only “see” what is necessary to run their process/application.

• In VMs the hypervisor control how resources are accessed – the hypervisor comunicates between host and guest. With Containers we can use Linux kernel features to access the resources and customise each of them.

• With VMs we have flexibility of hardware - we can create different virtual machines with different hardware. With Containers we can run our app/process anywhere we want which gives containers the advantage of portability.

• VM image files are larger than container files

To sum up – containers works faster, can be open almost anywhere. VMs are bigger in size, less portable and uses more resources.
