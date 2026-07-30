# Go High Level — Setup Guide

## 1. Custom Fields (Settings → Custom Fields → Contacts)

Crear estos campos en orden. Anotar el ID de cada uno y pegarlo en `.env`:

| Nombre             | Tipo     | Variable .env              |
|--------------------|----------|----------------------------|
| sector             | Dropdown | GHL_FIELD_SECTOR           |
| tipo_negocio       | Dropdown | GHL_FIELD_TIPO_NEGOCIO     |
| tamano_equipo      | Dropdown | GHL_FIELD_TAMANO_EQUIPO    |
| volumen_leads      | Dropdown | GHL_FIELD_VOLUMEN_LEADS    |
| crm_actual         | Dropdown | GHL_FIELD_CRM_ACTUAL       |
| usa_whatsapp       | Dropdown | GHL_FIELD_USA_WHATSAPP     |
| tiempo_propuesta   | Dropdown | GHL_FIELD_TIEMPO_PROPUESTA |
| problema_principal | Text     | GHL_FIELD_PROBLEMA         |
| urgencia           | Dropdown | GHL_FIELD_URGENCIA         |
| presupuesto_est    | Dropdown | GHL_FIELD_PRESUPUESTO      |
| lead_score         | Number   | GHL_FIELD_LEAD_SCORE       |
| lead_tier          | Dropdown | GHL_FIELD_LEAD_TIER        |
| lead_source_detail | Text     | GHL_FIELD_COMO_CONOCISTE   |
| notas_diagnostico  | Text     | GHL_FIELD_NOTAS            |

---

## 2. Tags (se crean automaticamente al asignarlos, pero conviene crearlos antes)

```
#nuevo-lead
#cold  #warm  #hot  #premium
#budget-bajo  #early-stage
#clinica  #eventos  #formacion  #consultoria  #agencia
#via-linkedin  #via-google  #via-referido  #via-web-organico
#diagnostico-enviado
#llamada-agendada  #llamada-completada
#propuesta-enviada  #en-negociacion
#cerrado-ganado  #cerrado-perdido
#nurture-activo
#sin-respuesta-24h  #sin-respuesta-48h  #sin-respuesta-7d
#reactivar-futuro
```

---

## 3. Pipeline (Opportunities → Pipelines → New Pipeline)

Nombre: **Comercial — Automatizacion**

Etapas en orden:
1. Nuevo Lead
2. Lead Cualificado
3. Diagnostico Enviado
4. Llamada Agendada
5. Llamada Completada
6. Propuesta en Preparacion
7. Propuesta Enviada
8. Seguimiento Activo
9. Cerrado Ganado
10. Cerrado Perdido
11. Nurture / Futuro

Guardar el Pipeline ID y el Stage ID de "Nuevo Lead" en `.env`:
- GHL_PIPELINE_ID=...
- GHL_STAGE_NUEVO_LEAD=...

---

## 4. Automatizaciones (Automation → Create Workflow)

### AUTO-01: Formulario enviado
- Trigger: Contact Created + tag #nuevo-lead
- Actions:
  1. Send email: "He recibido tu diagnostico, [nombre]"
  2. If tag is #hot OR #premium → Send internal notification (SMS/email a Ramiro)
  3. If tag is #hot OR #premium → Send WhatsApp to lead (30 min delay)

### AUTO-02: Sin respuesta 24h
- Trigger: Contact Tag Added → #nuevo-lead
- Wait: 24h
- Condition: No tiene tag #llamada-agendada
- Actions:
  1. Add tag #sin-respuesta-24h
  2. Send email: "¿Sigues interesado?"

### AUTO-03: Sin respuesta 48h
- Trigger: Tag Added → #sin-respuesta-24h
- Wait: 24h
- Condition: No tiene #llamada-agendada
- Actions:
  1. Add tag #sin-respuesta-48h
  2. Send WhatsApp

### AUTO-04: Sin respuesta 7 dias
- Trigger: Tag Added → #sin-respuesta-48h
- Wait: 5 days
- Condition: Sin actividad
- Actions:
  1. Add tag #reactivar-futuro
  2. Move to "Nurture / Futuro"
  3. Send email de cierre
  4. Start nurture sequence (mensual, 3 meses)

### AUTO-05: Llamada agendada (Calendar trigger)
- Trigger: Appointment Booked
- Actions:
  1. Add tag #llamada-agendada
  2. Move to stage "Llamada Agendada"
  3. Send confirmation email
  4. Schedule WhatsApp reminder 2h before

### AUTO-06: Llamada cancelada
- Trigger: Appointment Cancelled
- Actions:
  1. Remove tag #llamada-agendada
  2. Add tag #sin-respuesta-24h
  3. Send email: "Sin problema, reagendamos cuando quieras"

### AUTO-07: Propuesta enviada
- Trigger: Stage Changed → Propuesta Enviada
- Actions:
  1. Save date to propuesta_enviada_fecha
  2. Add tag #propuesta-enviada
  3. Wait 3 days
  4. If no response: send follow-up email
  5. Wait 7 more days
  6. If no response: send WhatsApp

### AUTO-08: Cerrado ganado
- Trigger: Stage Changed → Cerrado Ganado
- Actions:
  1. Add tag #cerrado-ganado
  2. Send welcome email ("Arrancamos")
  3. Internal notification

### AUTO-09: Cerrado perdido
- Trigger: Stage Changed → Cerrado Perdido
- Actions:
  1. Add tag #cerrado-perdido
  2. Send amicable closing email
  3. If motivo = precio OR timing → Move to Nurture / Futuro

---

## 5. API Key

Settings → API Keys → Create Key
Scope recomendado: Contacts (read/write), Opportunities (read/write), Tags (read/write)
Pegar en .env como GHL_API_KEY
