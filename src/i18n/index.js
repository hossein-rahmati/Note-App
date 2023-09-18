import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("lang"),
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        myNotes: "My Notes",
        sort: {
          earliest: "Earliest",
          latest: "Latest",
          completed: "Completed",
        },
        addNewNote: {
          header: "Add new note",
          titlePlaceHolder: "Title",
          descritptionPlaceHolder: "Description...",
          addButton: "Add",
          toastSuccess: "Note added successfully",
          toastInfo: "Please fill the forms",
        },
        status: {
          empty: "There is no note, yet",
          completed: "Completed",
          incomplete: "Incomplete",
          all: "All",
        },
      },
    },
    fa: {
      translation: {
        myNotes: "یادداشت های من",
        sort: {
          earliest: "قدیمی ترین ها",
          latest: "جدید ترین ها",
          completed: "کامل شده ها",
        },
        addNewNote: {
          header: "افزودن یادداشت جدید",
          titlePlaceHolder: "عنوان",
          descritptionPlaceHolder: "متن یادداشت...",
          addButton: "افزودن",
          toastSuccess: "یادداشت با موفقیت افزوده شد",
          toastInfo: "لطفا هردو فیلد را پر کنید",
        },
        status: {
          empty: "هیچ یادداشتی در حال حاضر وجود ندارد",
          completed: "تکمیل شده",
          incomplete: "تکمیل نشده",
          all: "همه",
        },
      },
    },
  },
});

export default i18n;
