const BASE_URL = "https://mansa-backend-l4k5.onrender.com";
//const BASE_URL = "http://localhost:5000";

export const createUser = async (data) => {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(res.message);
    if (!res.ok) throw new Error(res.message);

    return res.json();
};

export const getAllUsers = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const getUser = async (userId) => {
    const res = await fetch(`${BASE_URL}/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

export const updateUser = async (userId, data) => {
    const res = await fetch(`${BASE_URL}/api/v1/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

////Auth services
export const login = async (data) => {
    const res = await fetch(`${BASE_URL}/api/v1/users/login`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error(res.message);
    }
    return res.json();
};

export const logout = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/users/logout`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("Logout failed");
    return res.json();
};

// Patient Service
export const createPatient = async (data) => {
    const res = await fetch(`${BASE_URL}/api/v1/patients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const getAllPatient = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/patients`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const getOnePatient = async (id) => {
    const res = await fetch(`${BASE_URL}/api/v1/patients/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const updatePatient = async (patientId, data) => {
    const res = await fetch(`${BASE_URL}/api/v1/patients/${patientId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const delPatient = async (id) => {
    console.log(id);
    const res = await fetch(`${BASE_URL}/api/v1/patients/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

// Lab Test services
export const conductTest = async (data) => {
    const res = await fetch(`${BASE_URL}/api/v1/tests/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

export const getAllTest = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/tests`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const getOneTest = async (testId) => {
    const res = await fetch(`${BASE_URL}/api/v1/tests/${testId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const delLabTest = async (id) => {
    console.log(id);
    const res = await fetch(`${BASE_URL}/api/v1/tests/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

export const updateLabTest = async (id, data) => {
    const res = await fetch(`${BASE_URL}/api/v1/tests/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

/////Others(status update)

export const updatePatientStatus = async (id, data) => {
    const res = await fetch(`${BASE_URL}/api/v1/patients/status/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const updateLabStatus = async (id, data) => {
    const res = await fetch(`${BASE_URL}/api/v1/tests/status/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

// Hospital services

export const createHospitalTest = async (data) => {
    const res = await fetch(`${BASE_URL}/api/v1/hospital-test/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

export const getAllHospitalTest = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/hospital-test`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const getHospitalTest = async (testId) => {
    const res = await fetch(`${BASE_URL}/api/v1/hospital-test/${testId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
export const delHospitalTest = async (id) => {
    console.log(id);
    const res = await fetch(`${BASE_URL}/api/v1/hospital-test/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

export const updateHospitalTest = async (id, data) => {
    const res = await fetch(`${BASE_URL}/api/v1/hospital-test/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};

export const getPatientByFileNumber = async (fileNumber) => {
    const res = await fetch(`${BASE_URL}/api/v1/patient/file/${fileNumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(res.message);
    return res.json();
};
