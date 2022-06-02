import axios from "axios";

const init = async () => {
  const corporateServicesRequest = await axios.get(
    `http://localhost:52219/api/GroupLogin/Dashboard/CorporateServices`
  );

  const dashboardDetailsRequest = await axios.get(
    `http://localhost:52219/api/groupLogin/Dashboard/DashboardDetails`,
    {
      params: { LoginId: 3225926 },
    }
  );

  console.log(corporateServicesRequest.data);
  console.log(dashboardDetailsRequest.data);

  const corporateServices = corporateServicesRequest.data.Result;
  const dashboardDetails = dashboardDetailsRequest.data.Result;

  const a = corporateServices
    .filter((cs) => cs.Active)
    .map((cs) => ({
      ...cs,
      ...dashboardDetails.find(
        (dd) => dd.CorpServiceGuid == cs.CorporateServiceID
      ),
    }));

  console.log(JSON.stringify(a));
};

init();
