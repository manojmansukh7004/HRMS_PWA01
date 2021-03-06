
async function punchInService(attendanceType, user, lat, long, location) {
  const payload = {
    loginDetails:
      {
        LoginEmpID: user.LoginEmpID,
        LoginEmpCompanyCodeNo: user.LoginEmpCompanyCodeNo,
        AttendanceType: attendanceType,
      },
    punchData:
      {
        AttType: attendanceType,
        Action: 'PunchIn',
        Longitude: long,
        Latitude: lat,
        Location: location
      }
  };
  const formBody = JSON.stringify(payload, (key, value) => {
    if (value !== null) {
      return value;
    }
    return {};
  });

  const response = await fetch(`${user.baseUrl}/Attendance/SubmitPunchData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formBody,
  });
  const responseJson = await response.json();
  return responseJson;
}

export { punchInService };
