---
slug: "azure-service-principals-101"
date: "2021-01-09"
title: "Azure Service Principals 101"
featuredImage: "./images/featured.png"
thumbImage: "./images/thumb.png"
description: "Introduction to Azure Service Principals and some useful commands used to manage them."
tags: ["Azure", "AzureCLI"]
---

I was recently talking to a colleague who was starting with Azure for the first time, we were discussing authentication methods, especially when using external tools. When interacting with Azure programmatically, you soon stumble across service principals, however, for someone new to Azure what are Service Principals and some of the useful commands used to manage them?

<Callout>
  for the snippets below, I am assuming that you have a single Azure Tenant and it has the default name of "Default Directory".
</Callout>

## What is a Service Principal?

Azure uses Active Directory (AD) to manage users and other access to Azure services and resources. When a user logs onto Azure, they have a User identity object within AD that has associated permissions and roles dictating their access within Azure.

Often there are requirements to have programmatic access to Azure resources and services. One example may be automated tools within CI/CD to deploy an application or access Azure services. Rather than creating a "dummy/fake" user identity within AD, we create a Service Principal.

Service Principals can have their permission scoped to only interact with a particular set of resources or services. Furthermore, roles outline the actions that the service principal can perform on the resources or services.

## List Service Principals

There are tons of built-in Service Principals (SPs) within Azure such as SPs for Office 365 whether you use it or not. To find SPs that you've created, it's best filtering out to only include those within your Azure Tenant.

```azurecli
az ad sp list --filter "publisherName eq 'Default Directory'"
```

## Create a Service Principal

When creating a service principal, you should specify a name for easier management in the future. You should also only give it the minimum roles and scopes required to undertake the desired action.

<Callout>
  service principals have a default expiry of 1 year from creation. You can specify how many years before expiry by providing the `--years` property.
</Callout>

```azurecli
az ad sp create-for-rbac -n "MyAwesomeApp" --role Reader --scopes /subscriptions/{SubID}/resourceGroups/{ResourceGroup1} /subscriptions/{SubID}/resourceGroups/{ResourceGroup2}
```

For all parameters, you can refer to the documentation for [az ad sp create-for-rbac][1].

## Find Expired Service Principals

There is a quota limit on Service Principals within an Azure Tenant not to mention it's probably good hygiene to clean up after yourself. So we sometimes want to find expired Service Principals to either delete or renew them.

Below is a Powershell command to list all Service Principals that have expired. We first get a list of all Service Principals within our Tenant then loop over them checking the expiry date, only outputting those that have expired.

<Callout>
  unlike other commands in this post this is a Powershell command, not Azure CLI, so if you are running Az CLI outside of Powershell you may want to use Azure's Cloud Shell to undertake this action.
</Callout>

```powershell{numberLines: true}
$spns = az ad sp list --filter "publisherName eq 'Default Directory'" | ConvertFrom-Json | Select appId, displayName | Sort-Object -Property displayName
foreach ($spn in $spns) {
    az ad sp credential list --id $spn.appId | ConvertFrom-Json | Where-Object endDate -lt $(Get-Date) | Select @{Name="displayName";expression={$spn.displayName}}, keyId, startDate, endDate
}
```

## Renew/Update a Service Principal

When Service Principals expire, they need to be renewed. Likewise, if the Service Principal secret is exposed, it must be regenerated. The command below resets the service principal generating a new secret key and expiry.

<Callout>
  service principals have a default expiry of 1 year from creation. You can specify how many years before expiry by providing the `--years` property.
</Callout>

```azurecli
az ad sp credential reset --name "MyAwesomeApp"
```

For all parameters, you can refer to the documentation for [az ad sp credential reset][2].

## Delete a Service Principal

Once you have no use for a Service Principal, you should delete it removing access to Azure. Although I haven't touched upon it much in this post, it is possible to have multiple credentials assigned to a Service Principal. Multiple credentials are useful when you have more than one Azure Tenant.

Below is a command to delete a Service Principal, all credentials, roles and scopes.

<Callout>
  `--id` can take the Service Principal ID or name
</Callout>

```azurecli
az ad sp delete --id "MyAwesomeApp"
```

For all parameters, you can refer to the documentation for [az ad sp delete][3] or deleting a single credential on a Service Principal [az ad sp credential delete][4].

[1]: https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-latest#az_ad_sp_create_for_rbac
[2]: https://docs.microsoft.com/en-us/cli/azure/ad/sp/credential?view=azure-cli-latest#az_ad_sp_credential_reset
[3]: https://docs.microsoft.com/en-us/cli/azure/ad/sp?view=azure-cli-latest#az_ad_sp_delete
[4]: https://docs.microsoft.com/en-us/cli/azure/ad/sp/credential?view=azure-cli-latest#az_ad_sp_credential_delete
