import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "~/config/axios";

const LIST = {
  physicians: [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "Dr Brus",
    },
    {
      id: 3,
      name: "Dr.Acula",
    },
    {
      id: 4,
      name: "test 3",
    },
  ],
  clinicians: [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "test 2 updated",
    },
  ],
  supphysicians: [
    {
      id: 1,
      name: "test",
    },
    {
      id: 2,
      name: "Dr Brus",
    },
    {
      id: 3,
      name: "Dr.Acula",
    },
    {
      id: 4,
      name: "test 3",
    },
  ],
  visittypes: [
    {
      id: 1,
      name: "In-Patient",
    },
    {
      id: 2,
      name: "Out-Patient",
    },
  ],
  serviceareas: [
    {
      id: 1,
      name: "test 1",
    },
    {
      id: 2,
      name: "test 2",
    },
  ],
  visitstatus: [
    {
      id: 1,
      name: "Rejected",
    },
    {
      id: 2,
      name: "Paid",
    },
    {
      id: 3,
      name: "Billed",
    },
  ],
};

export const getAllDropdowns = () => {
  return LIST;
};
