const express = require('express');
const app = express();

// Middleware para que el cliente interprete la respuesta como JSON
app.use(express.json());

// Datos a exponer
const responseData = {
  "correlation_id": "00-948af74963de1122d18d401ff7f4d0ae-848450f9a49ed026-00",
  "data": 
  
  [
  {
    "status": "P",
    "service_request_number": "Testing50006",
    "policy_holder": "TransPacífico del Norte S.A.",
    "registration_date": "2025-12-21T08:30:15",
    "coverage": "Gastos médicos",
    "insured_name": "ROBERTO BENITEZ VEGA",
    "license_plate": "QWE789",
    "occurrence_date": "2025-12-20T14:10:00",
    "regulatory_deadline_value": 30,
    "regulatory_deadline_color": "VERDE",
    "claim_number": "SIN SINIESTRO ASOCIADO",
    "claim_status": "PENDIENTE",
    "service_request_id": "PROT-006",
    "product": "1",
    "document_type": 1,
    "document_number": "54871239",
    "full_name": "Roberto Benítez"
  },
  {
    "status": "P",
    "service_request_number": "Testing50007",
    "policy_holder": "Comercializadora Central E.I.R.L.",
    "registration_date": "2025-12-22T10:05:40",
    "coverage": "Invalidez",
    "insured_name": "PATRICIA NAVARRO RIOS",
    "license_plate": "RTY456",
    "occurrence_date": "2025-12-18T11:25:00",
    "regulatory_deadline_value": 140,
    "regulatory_deadline_color": "AMARILLO",
    "claim_number": "SIN SINIESTRO ASOCIADO",
    "claim_status": "PENDIENTE",
    "service_request_id": "PROT-007",
    "product": "1",
    "document_type": 1,
    "document_number": "32659874",
    "full_name": "Patricia Navarro"
  },
  {
    "status": "P",
    "service_request_number": "Testing50008",
    "policy_holder": "Particular",
    "registration_date": "2025-12-22T15:50:00",
    "coverage": "Sepelio",
    "insured_name": "CARLOS EDUARDO GUTIERREZ",
    "license_plate": "UIO123",
    "occurrence_date": "2025-12-21T21:00:00",
    "regulatory_deadline_value": 20,
    "regulatory_deadline_color": "VERDE",
    "claim_number": "SIN SINIESTRO ASOCIADO",
    "claim_status": "PENDIENTE",
    "service_request_id": "PROT-008",
    "product": "1",
    "document_type": 1,
    "document_number": "61243587",
    "full_name": "Carlos Gutiérrez"
  },
  {
    "status": "P",
    "service_request_number": "Testing50009",
    "policy_holder": "Soluciones Logísticas Globales S.A.C.",
    "registration_date": "2025-12-23T12:15:20",
    "coverage": "Gastos médicos",
    "insured_name": "DIANA MARCELA CASTRO",
    "license_plate": "PAS951",
    "occurrence_date": "2025-12-15T09:45:00",
    "regulatory_deadline_value": 205,
    "regulatory_deadline_color": "ROJO",
    "claim_number": "SIN SINIESTRO ASOCIADO",
    "claim_status": "PENDIENTE",
    "service_request_id": "PROT-009",
    "product": "1",
    "document_type": 1,
    "document_number": "90871234",
    "full_name": "Diana Castro"
  },
  {
    "status": "P",
    "service_request_number": "Testing50010",
    "policy_holder": "Constructora e Inmobiliaria del Valle",
    "registration_date": "2025-12-24T09:00:10",
    "coverage": "Fallecimiento",
    "insured_name": "FERNANDO LUIS ALVAREZ",
    "license_plate": "DFG753",
    "occurrence_date": "2025-12-22T18:30:00",
    "regulatory_deadline_value": 95,
    "regulatory_deadline_color": "AMARILLO",
    "claim_number": "SIN SINIESTRO ASOCIADO",
    "claim_status": "PENDIENTE",
    "service_request_id": "PROT-010",
    "product": "1",
    "document_type": 1,
    "document_number": "15984726",
    "full_name": "Fernando Álvarez"
  }
]
  
  
  ,
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