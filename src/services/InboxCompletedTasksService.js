
async function getCompletedTasks(user) {
  const payload = {
    loginDetails:
      {
        LoginEmpID: user.LoginEmpID,
        LoginEmpCompanyCodeNo: user.LoginEmpCompanyCodeNo,
        loginEmpGroupId: ''
      },
  };
  const formBody = JSON.stringify(payload, (key, value) => {
    if (value !== null) {
      return value;
    }
    return {};
  });

  const response = await fetch(`${user.baseUrl}/Inbox/BindCompletedTasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formBody,
  });
  const responseJson = await response.json();
  return responseJson;
}

export { getCompletedTasks };
