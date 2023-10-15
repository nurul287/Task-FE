import { useCallback, useRef, useState } from "react";
import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import SelectCategory from "./SelectCategory";
import Button from "./Button";
import useCategoriesApi from "../services/useCategoriesApi";
import useSaveUserApi from "../services/useSaveUserApi";
import useSearchUserApi from "../services/useSearchUserApi";

const UserInfo = () => {
  const { categories } = useCategoriesApi();
  const { saveUser } = useSaveUserApi();
  const { users, getUsers } = useSearchUserApi();
  const [userInfo, setUserInfo] = useState({
    name: "",
    sector: "",
    agreeUserPolicy: false,
  });
  const searchUser = useRef<HTMLInputElement>(null);
  const [isFindMode, setIsFindMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleView = useCallback(() => {
    setIsEditMode(true);
    setIsFindMode(false);
  }, []);

  const handleInfoChange = useCallback(
    (key: string) => (value: any) => {
      setUserInfo((prev) => ({ ...prev, [key]: value }));
    },
    [setUserInfo]
  );

  const handleSave = useCallback(async () => {
    await saveUser(userInfo)
      .then((res) => {
        const { name, sector, agreeUserPolicy } = res;
        setUserInfo({ name, sector, agreeUserPolicy });
        handleView();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInfo]);

  const handleFidClick = useCallback(() => {
    setIsFindMode(true);
  }, []);

  const handleSearchUser = useCallback(() => {
    getUsers(searchUser.current?.value ?? "");
  }, []);

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        {!isEditMode ? (
          <div>
            <Button color="info" onClick={handleSave}>
              Save
            </Button>
            <Button color="info" onClick={handleView}>
              View
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={(e)=>setIsEditMode(false)}>Edit</Button>
            <Button onClick={handleFidClick}>Find User</Button>
            {isFindMode && (
              <Button onClick={handleSearchUser}>Search User</Button>
            )}
          </div>
        )}
      </div>
      {!isEditMode ? (
        <div>
          <p>
            Please enter your name and pick the Sectors you are currently
            involved in.
          </p>
          <TextInput
            width="300px"
            title="Name"
            value={userInfo.name}
            onChange={handleInfoChange("name")}
          />
          <SelectCategory
            categories={categories}
            selectedCategory={userInfo.sector}
            onSelect={handleInfoChange("sector")}
            title="Sectors"
          />
          <Checkbox
            value={userInfo.agreeUserPolicy}
            onChange={handleInfoChange("agreeUserPolicy")}
            label="Agree to terms"
          />
        </div>
      ) : isFindMode ? (
        <div>
          <TextInput width="300px" title="Name" inputRef={searchUser} />
          <p>User information</p>
          <div>
            {users.map((user) => (
              <>
                <p>
                  <span>Name:</span> <span>{user.name}</span>
                </p>
                <p>
                  <span>Sector:</span> <span>{user.sector}</span>
                </p>
                <p>
                  <span>Agree to terms:</span>{" "}
                  <span>{user.agreeUserPolicy ? "Yes" : "No"}</span>
                </p>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p>User information</p>
          <p>
            <span>Name:</span> <span>{userInfo.name}</span>
          </p>
          <p>
            <span>Sector:</span> <span>{userInfo.sector}</span>
          </p>
          <p>
            <span>Agree to terms:</span>{" "}
            <span>{userInfo.agreeUserPolicy ? "Yes" : "No"}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
