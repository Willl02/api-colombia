const express = require('express');
const app = express();

// Middleware para que el cliente interprete la respuesta como JSON
app.use(express.json());

// Datos a exponer
const responseData = {
  "correlation_id": "00-948af74963de1122d18d401ff7f4d0ae-848450f9a49ed026-00",
  "data": [
    {
      "status": "P",
      "service_request_number": "Nro.000001",
      "policy_holder": "Transportes Lima S.A.C.",
      "registration_date": "2026-08-16T16:08:27",
      "coverage": "Fallecimiento",
      "insured_name": "CARLOS SUAREZ",
      "license_plate": "SDFW123",
      "occurrence_date": "2026-08-09T17:00:00",
      "regulatory_deadline_value": 217,
      "regulatory_deadline_color": "ROJO",
      "claim_number": "SIN-001",
      "claim_status": "PENDIENTE",
      "service_request_id": "121",
      "product": "SOAT",
      "document_type": 1,
      "document_number": "100123",
      "full_name": "Juan Pérez"
    },
    {
      "status": "A",
      "service_request_number": "Nro.000002",
      "policy_holder": "Logística Andina E.I.R.L.",
      "registration_date": "2025-12-17T09:15:00",
      "coverage": "Gastos médicos",
      "insured_name": "MARIA GONZALEZ LOPEZ",
      "license_plate": "ABC987",
      "occurrence_date": "2025-12-15T10:30:00",
      "regulatory_deadline_value": 45,
      "regulatory_deadline_color": "VERDE",
      "claim_number": "SIN SINIESTRO ASOCIADO",
      "claim_status": "APROBADO",
      "service_request_id": "122",
      "product": "SOAT",
      "document_type": 1,
      "document_number": "100456",
      "full_name": "María González"
    },
    {
      "status": "P",
      "service_request_number": "Nro.000003",
      "policy_holder": "Servicios Generales del Sur S.A.",
      "registration_date": "2026-08-18T14:22:10",
      "coverage": "Gastos médicos",
      "insured_name": "LUIS ALBERTO MENDOZA",
      "license_plate": "XYZ456",
      "occurrence_date": "2026-08-14T08:00:00",
      "regulatory_deadline_value": 110,
      "regulatory_deadline_color": "AMARILLO",
      "claim_number": "SIN-002",
      "claim_status": "EN_REVISION",
      "service_request_id": "123",
      "product": "SOAT",
      "document_type": 1,
      "document_number": "100789",
      "full_name": "Luis Mendoza"
    },
    {
      "status": "C",
      "service_request_number": "Nro.000004",
      "policy_holder": "Particular",
      "registration_date": "2026-08-19T11:45:00",
      "coverage": "Fallecimiento",
      "insured_name": "ANA MARIA TORRES",
      "license_plate": "MNO654",
      "occurrence_date": "2025-12-18T22:15:00",
      "regulatory_deadline_value": 15,
      "regulatory_deadline_color": "VERDE",
      "claim_number": "SIN-003",
      "claim_status": "CERRADO",
      "service_request_id": "124",
      "product": "SOAT",
      "document_type": 2,
      "document_number": "100101",
      "full_name": "Ana Torres"
    },
    {
      "status": "P",
      "service_request_number": "Nro.000005",
      "policy_holder": "Inversiones R&R Corp S.A.C.",
      "registration_date": "2026-08-20T17:00:30",
      "coverage": "Gestor de sepelio",
      "insured_name": "JORGE RAMIREZ SILVA",
      "license_plate": "JKL321",
      "occurrence_date": "2025-12-19T19:40:00",
      "regulatory_deadline_value": 180,
      "regulatory_deadline_color": "ROJO",
      "claim_number": "SIN-004",
      "claim_status": "PENDIENTE",
      "service_request_id": "125",
      "product": "SOAT",
      "document_type": 1,
      "document_number": "100102",
      "full_name": "Jorge Ramírez"
    }
  ],
  "meta": {
    "pagination": {
      "total_items": 25,
      "limit_records": 5,
      "page_number": 1
    }
  },
  "links": {
    "self": "/api/v1/service-requests/query?page=1&limit=5",
    "next": "/api/v1/service-requests/query?page=2&limit=5"
  }
};

// Ruta ajustada a la especificada en 'links'
app.get('/api/v1/service-requests/query', (req, res) => {
  res.json(responseData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});