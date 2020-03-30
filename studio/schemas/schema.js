import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import stateCannabisInfo from "./stateCannabisInfo";
import post from "./post";
import product from "./product";
import ctaSection from "./ctaSection";
import quoteSection from "./quoteSection";
import source from "./source";
import figure from "./figure";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    stateCannabisInfo,
    post,
    product,
    ctaSection,
    quoteSection,
    source,
    figure
  ])
});
