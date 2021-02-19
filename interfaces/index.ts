export interface ConditionInterface {
  condition_concept_id: string;
  condition_end_date: string;
  condition_end_datetime: string;
  condition_occurrence_id: string;
  condition_source_concept_id: string;
  condition_source_value: string;
  condition_start_date: string;
  condition_start_datetime: string;
  condition_status_concept_id: string;
  condition_status_source_value: string;
  condition_type_concept_id: string;
  person_id: string;
  provider_id: string;
  stop_reason: string;
  visit_detail_id: string;
  visit_occurrence_id: string;
}
export interface DeathInterface {
  cause_concept_id: string;
  cause_source_concept_id: string;
  cause_source_value: string;
  death_date: string;
  death_datetime: string;
  death_type_concept_id: string;
  person_id: string;
}
export interface Person {
  birth_datetime: string;
  care_site_id: string;
  day_of_birth: string;
  ethnicity_concept_id: string;
  ethnicity_source_concept_id: string;
  ethnicity_source_value: string;
  gender_concept_id: string;
  gender_source_concept_id: string;
  gender_source_value: string;
  location_id: string;
  month_of_birth: string;
  person_id: string;
  person_source_value: string;
  provider_id: string;
  race_concept_id: string;
  race_source_concept_id: string;
  race_source_value: string;
  year_of_birth: string;
}
export interface VisitInterface {
  admitting_source_concept_id: string;
  admitting_source_value: string;
  care_site_id: string;
  discharge_to_concept_id: string;
  discharge_to_source_value: string;
  person_id: string;
  preceding_visit_occurrence_id: string;
  provider_id: string;
  visit_concept_id: string;
  visit_end_date: string;
  visit_end_datetime: string;
  visit_occurrence_id: string;
  visit_source_concept_id: string;
  visit_source_value: string;
  visit_start_date: string;
  visit_start_datetime: string;
  visit_type_concept_id: string;
}
