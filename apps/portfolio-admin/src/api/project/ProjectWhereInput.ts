import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  owner?: UserWhereUniqueInput;
};
