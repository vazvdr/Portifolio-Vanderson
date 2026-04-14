import { useTranslation } from "react-i18next";
import useFormacao from "../../hooks/useFormacao";
import FormacaoComponent from "./FormacaoComponent";

const FormacaoWrapper = () => {
  const { t } = useTranslation();

  const { animate, showAll, setShowAll, visibleCards } = useFormacao();

  return (
    <FormacaoComponent
      t={t}
      animate={animate}
      showAll={showAll}
      setShowAll={setShowAll}
      visibleCards={visibleCards}
    />
  );
};

export default FormacaoWrapper;